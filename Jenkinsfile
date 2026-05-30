pipeline {

    agent {
        label 'dev-server'
    }

    stages {

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t employee-portal .'
            }
        }

        stage('Docker Run') {
            steps {
                sh '''
                docker rm -f employee-portal || true
                docker run -d \
                --name employee-portal \
                -p 3000:3000 \
                employee-portal
                '''
            }
        }
    }
}
