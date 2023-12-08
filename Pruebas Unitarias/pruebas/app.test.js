import request from 'supertest';
import app from '../src/app.js'

var publi = {"Curso": "AYD1",
"año":2023,
"aux":"Ana Morales"}

describe("Prueba de LOGIN", ()=>{
    test("Prueba de get / hola", async ()=>{
        const res = await request(app).get("/hola").send()
        expect(res.statusCode).toBe(200);
    })
    test("Prueba de post / publicacion", async ()=>{
        const res2 = await request(app).post("/publicacion").send(publi)
        expect(res2.body).toEqual("Se realizó la publicacion correctamente :)");
    })
})