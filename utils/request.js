class Request {
    // baseUrl = 'https://free-api.heweather.net/s6/weather?location=CN101180101&key=7afdbb48602442c3b32124b3e1f064bd'
    baseUrl = 'https://free-api.heweather.net/s6'

    getData({url, method='GET', data={}}) {
        return new Promise( (resolve, reject) => {
            wx.request({
                url: this.baseUrl + url,
                method: method,
                data: data,
                success: res => {
                    if(res.statusCode == 200) {
                        resolve(res.data['HeWeather6'][0])
                    } else {
                        this._showError()
                    }                   
                },
                fail: err => {
                    reject()
                    this._showError()
                }
            })
        })
    }


    _showError() {
        wx.showToast({
            title: "请求错误",
            icon: "none"
        })
    }
}

export {Request}