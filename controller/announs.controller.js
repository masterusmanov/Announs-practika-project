const express = require('express');
const { read_file, write_file } = require('../fs/fs_api.js');
const { validateSignUp } = require('../validation/announs.validate.js')

const fs = require('fs')


const announs = {
    GET: (req, res) => {
        const announs = read_file('announs.json');
        res.send(announs);
    },
    POST: (req, res) => {
        const new_announs = req.file;
        let {sana, vaqt, yunalish, ichki, turi, link, imya, kasb, tel, tel1, tavsif, yozish } = req.body
        fs.writeFileSync(`./model/upload_file/${new_announs.originalname}`, new_announs.buffer)
        console.log(sana);
        // console.log(new_announs);
        const announs = read_file('announs.json');

        announs.push({
            id: announs.length + 1,
            sana, vaqt, yunalish, ichki, turi, link, imya, kasb, tel, tel1, tavsif, yozish,
            img: new_announs.originalname
        })

        write_file('announs.json', announs)
        res.status(201).send('Created');
    },
    PUT: (req, res) => {
        const new_announs = req.body;
        const announs = read_file("announs.json");
        const announ = announs.find(kto => kto.id == req.params.id);
        if (!announ)
            return res.status(404).send('Bunday e\'lon yo\'q')

        const { error } = validateSignUp(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }
        announs.name = new_announs.name || announs.name
        announs.surname = new_announs.surname || announs.surname
        write_file('announs.json', announs)
        res.status(200).send(announs);
    },
    DELETE: (req, res) => {
        const announs = read_file("announs.json");
        const announ = announs.find(kto => kto.id == req.params.id);
        if (!announ)
            return res.status(404).send('Bunday ismli foydalanuvchi yo\'q')
        let announsIdx = announs.indexOf(announs);
        announs.splice(announsIdx, 1);

        write_file('announs.json', announs);
        res.send(announs);
    },
    MAIN_POST: (req, res) => {
        const announs = read_file("announs.json");
        const announ = announs.find(kto => kto.id == req.params.id);
        let tasdiqlar = read_file('tasdiq.json')

        tasdiqlar.push(announ)

        write_file('tasdiq.json', tasdiqlar)
        res.send('tasdiqlandi')

    },
    MAIN_GET: (req, res) => {
        const announs = read_file('tasdiq.json');
        res.send(announs);
    },
    MAIN_GET_ID: (req, res) => {
        const announs = read_file('tasdiq.json');
        res.send(announs);
    },
    WEB_GET_ID: (req, res) => {
        const announs = read_file('tasdiq.json');
        res.send(announs);
    },
    MOBIL_GET_ID: (req, res) => {
        const announs = read_file('tasdiq.json');
        res.send(announs);
    },
    AI_GET_ID: (req, res) => {
        const announs = read_file('tasdiq.json');
        res.send(announs);
    },
    KIBER_GET_ID: (req, res) => {
        const announs = read_file('tasdiq.json');
        res.send(announs);
    },
    ONLINE_GET_ID: (req, res) => {
        const announs = read_file('tasdiq.json');
        res.send(announs);
    },
    OFFLINE_GET_ID: (req, res) => {
        const announs = read_file('tasdiq.json');
        res.send(announs);
    },
    IMYA_GET_ID: (req, res) => {
        const announs = read_file('tasdiq.json');
        res.send(announs);
    }
}

module.exports = announs;