const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   
   
   // Objeto ISSUE

   const Issue = {
    title: "I don't use Linux",
    repositoryNameAssociated: "CarloGilmar",
    status: "Open",
    numberOfComments: 34,
    labels: ["Finalizado","Semana2","Linux"],
    author: "JorgeMC",
    dateCreated: "12/04/2022",
    lastUpdated: "18/04/2022",
    getTitleAndAuthor: function(){
      return `Titulo: ${this.title}` + ` Autor ${this.author}`
    },
    getGeneralInfo: function(){
      return `This issue ${this.title} was created by ${this.author}  and status is  ${this.status}`
    }
   }

   console.log("titulo del Issue " + Issue.title)
   console.log("Asociado del Repo " + Issue.repositoryNameAssociated)
   console.log("Info del Issue: " + Issue.getGeneralInfo())
