var https = require('https')
var fs = require('fs')
var request = require('request')
var urlList = []
var page = 0
var lastPage = 4
let aUrl='https://www.toutiao.com/api/search/content/?aid=24&offset='+page*20+'&format=json&keyword=%E8%A1%97%E6%8B%8D&autoload=true&count=20&cur_tab=1&from=search_tab&pd=synthesis';
getImgData(aUrl)
function getImgData(url) {
  https.get(url, function (res) {
    var aHtml = ''
    res.setEncoding('utf8');
    res.on('data', function (data) {
      aHtml += data
    })
    res.on('end', function () {
      html = JSON.parse(aHtml)
      for(let i of html.data) {
        if(i.large_image_url != undefined) {
          var obj1 = {title: i.title, img: i.large_image_url}
          urlList.push(obj1)
        }
      }
      page++;
      if (page<= lastPage) {
        console.log(`正在请求第${page}页...`)
        let tempUrl='https://www.toutiao.com/api/search/content/?aid=24&offset='+page*20+'&format=json&keyword=%E8%A1%97%E6%8B%8D&autoload=true&count=20&cur_tab=1&from=search_tab&pd=synthesis';
        getImgData(tempUrl)
      }else{
        console.log(`正在下载图片`)
        saveImg(urlList)
      }
    })
  })
}

function saveImg(urlList) {
  urlList.forEach((item,index) => {
    var imgName = item.title +'.jpg'
    request({uri: item.img,encoding: 'binary'}, function (err, res, body){
      if (!err && res.statusCode == 200) {
        fs.writeFile('./image/'+imgName, body,'binary',function (err) {
          if(err){console.log(err)}
        })
      }
    })
  })
}