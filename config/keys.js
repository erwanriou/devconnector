const db = {
  user : 'erwan',
  password : '17401985illidan',
  url : function() {
    return `mongodb://${this.user}:${this.password}@ds145921.mlab.com:45921/devconnectorappdb`
  },
  options : {
    useNewUrlParser: true,
  },
}

exports.db = db
