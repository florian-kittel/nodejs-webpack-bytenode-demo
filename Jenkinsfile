pipeline {
  agent {
    node {
      label 'Node'
    }

  }
  stages {
    stage('Install') {
      agent {
        node {
          label 'Node'
        }

      }
      steps {
        sh 'npm -v'
        sh 'node -v'
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Done') {
      steps {
        echo 'Done'
      }
    }
  }
}