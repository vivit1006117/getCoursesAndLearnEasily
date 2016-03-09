# getCoursesAndLearnEasily
1.npm install
2.bower install
3.grunt

export JAVA_HOME=/Library/Java/Home      

Download Maven 3.3.3 from http://maven.apache.org/download.cgi
apache-maven-3.3.3-bin.tar.gz

Set Maven environment variables
export M2_HOME=/usr/local/apache-maven/apache-maven-3.3.3
export M2=$M2_HOME/bin
export MAVEN_OPTS=-Xms256m -Xmx512m
export PATH=$M2:$PATH
varify mevan--> mvn --version

mvn help:effective-pom

Important: May not be working on chrome because of local json