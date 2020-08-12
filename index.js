const express = require('express')

const app = express()

// setup view engine with ejs
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let text = "Data Siswa";
    let dataSiswa = [
        {id: 1, nama: "Dimas", age: 19},
        {id: 2, nama: "Rumondang", age: 20},
        {id: 3, nama: "Chris", age: 21},
    ]

    res.render('pages/home', {
        text: text,
        dataSiswa: dataSiswa
    })
})

app.get('/about', (req, res) => {
    let text2 = "Biodata siswa";
    let biodata = {
        fullname: 'agung mubarok',
        name: 'agung',
        age: 19,
        address: 'Bogor',
    }
    let hobby = ['sleep', 'week up']

    res.render('pages/about', {
        text2: text2,
        biodata: biodata,
        hobby: hobby,
    })
})

app.listen(5000, () => {
    console.log('Server is running');
})