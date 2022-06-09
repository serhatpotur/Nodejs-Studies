const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('INDEX')
})
app.get('/about', (req, res) => {
    res.status(200).send('ABOUT!')
})
app.get('/contact', (req, res) => {
    res.status(200).send('CONTACT!')
})
// * : YUKARIDA Kİ YÖNLENDİRMELERİN DIŞINDA. ELSE GİBİ
app.get('*', (req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})