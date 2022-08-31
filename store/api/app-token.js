export default {
    generateDAppToken() {
        var date = new Date();
        var now = date.toISOString();
        var appSecret = process.env.appSecret;
        // var domain = document.location.host
        let domain = "dev.alkademi.id";
        if (domain == "dev.alkademi.id" || domain == "alkademi.id" || domain == "dev.alkamedia.id") {
          let url = document.location.pathname.split("/")[1].toLowerCase()
          if (url == 'pesilat') {
            if (domain == "dev.alkademi.id") domain = "pesilataws-dev.alkademi.id"
            if (domain == "dev.alkamedia.id") domain = "pesilat.alkamedia.id"
            if (domain == "alkademi.id") domain = "pesilat.alkademi.id"
          }
        }
        var hashText= now + "|" + domain + "|" + appSecret;
        
        var encryption = Buffer.from(hashText).toString('base64')
        
        return encryption
    }
}