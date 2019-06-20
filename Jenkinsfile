pipeline {
  agent {
    docker {
      args '12.4.0'
      image 'node'
    }

  }
  stages {
    stage('Install') {
      steps {
        echo 'Hello'
        sh 'npm -v'
      }
    }
  }
}