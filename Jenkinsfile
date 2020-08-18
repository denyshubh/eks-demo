pipeline {
    agent any
    environment {
        //be sure to replace "willbla" with your own Docker Hub username
        DOCKER_IMAGE_NAME = "denyshubh/portfolio"
    }
    stages {
        stage('Testing out git repo') {
            echo 'Checkout...'
            checkout scm
        }

        stage('Testing environment') {
            echo 'Testing environment...'
            sh 'git --version'
            echo "Branch: ${env.BRANCH_NAME}"
            sh 'docker -v'
        }

        // stage("Docker Lint Test") {
        //     echo 'Checking Proper Linting...'
        //     sh ' /home/ubuntu/.linuxbrew/Cellar/hadolint/1.18.0/bin/hadolint Dockerfile'
        // }
        stage('Build Docker Image') {
            echo 'Building Docker image...'
            withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                sh "docker builder build -t ${env.DOCKER_IMAGE_NAME} ."
                sh "docker push ${env.DOCKER_IMAGE_NAME}"
            }
        }
        stage('CanaryDeploy') {
            when {
                branch 'master'
            }
            environment { 
                CANARY_REPLICAS = 1
            }
            steps {
                kubernetesDeploy(
                    kubeconfigId: 'kubeconfig',
                    configs: 'train-schedule-kube-canary.yml',
                    enableConfigSubstitution: true
                )
            }
        }
        stage('DeployToProduction') {
            when {
                branch 'master'
            }
            environment { 
                CANARY_REPLICAS = 0
            }
            steps {
                input 'Deploy to Production?'
                milestone(1)
                kubernetesDeploy(
                    kubeconfigId: 'kubeconfig',
                    configs: 'train-schedule-kube-canary.yml',
                    enableConfigSubstitution: true
                )
                kubernetesDeploy(
                    kubeconfigId: 'kubeconfig',
                    configs: 'train-schedule-kube.yml',
                    enableConfigSubstitution: true
                )
            }
        }
    }
    post {
        cleanup {
            echo 'Cleaning up...'
            sh "docker system prune"
        }
    }
}
