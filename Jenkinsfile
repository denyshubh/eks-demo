pipeline {
    agent any
    environment {
        //be sure to replace "willbla" with your own Docker Hub username
        DOCKER_IMAGE_NAME = "denyshubh/portfolio"
    }
    stages {
        stage('Testing out git repo') {
            steps {
                echo 'Checkout...'
                checkout scm
            }
        }

        stage('Testing environment') {
            steps {
                echo 'Testing environment...'
                sh 'git --version'
                echo "Branch: ${env.GIT_BRANCH}"
                sh 'docker -v'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerhubPassword', usernameVariable: 'dockerhubUser')]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh "docker builder build -t ${env.DOCKER_IMAGE_NAME} ."
                    sh "docker push ${env.DOCKER_IMAGE_NAME}"
                }
            }
        }
        stage('CanaryDeploy') {
            when {
                branch 'test'
            }
            steps {
                sh "kubectl apply -f canary/frontend-svc-canary.yaml"
                sh "kubectl apply -f canary/portfolio-deploy-canary.yaml"
            }
        }
        stage('DeployToProduction') {
            when {
                branch 'test'
            }

            steps {
                input 'Deploy to Production?'
                milestone(1)
                steps {
                    sh "kubectl delete deploy portfolio-deployment-canary"
                    sh "kubectl apply -f stable/frontend-svc.yaml"
                    sh "kubectl apply -f stable/portfolio-deploy.yaml"
                }
            }
        }
    }
    post {
        cleanup {
            echo 'Cleaning up...'
            sh "docker system prune -f"
        }
    }
}
