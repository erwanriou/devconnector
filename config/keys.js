const keys = {
  user : 'erwan',
  password : '17401985illidan',
  secret: 'asd3f1g451rASDf1$%ads1f5q12w4g112asc1!@fgasdf21a5FFDfg1as23',
  url : function() {
    return `mongodb://${this.user}:${this.password}@ds145921.mlab.com:45921/devconnectorappdb`
  },
  options : {
    useNewUrlParser: true,
  },
}

exports.keys = keys
