import { lnko } from "../fuggvenyek.js";

function lnkoTeszt(){
    const tesztEsetLista=[
        {
            a:18,
            b:3,
            vart:3,
            szoveg:"Az a többszöröse b-nek"
        },
        {
            a:24,
            b:18,
            vart:6,
            szoveg:"nem a többszöröse b-nek"
        },
        {
            a:9,
            b:4,
            vart:1,
            szoveg:"relatív prímek, várt eredmény 1 "
        },
        {
            a:9,
            b:-4,
            vart:1,
            szoveg:"pozitív negatív "
        },
        {
            a:9,
            b:4,
            vart:1,
            szoveg:"pozitív "
        },
        {
            a:-9,
            b:-4,
            vart:1,
            szoveg:"negatív "
        },
    ]

for (let index = 0; index < tesztEsetLista.length; index++) {
    let eredmeny = lnko(tesztEsetLista[index].a, tesztEsetLista[index].b);
    console.assert(
        eredmeny===(tesztEsetLista[index].vart),`a= ${tesztEsetLista[index].a},b= ${tesztEsetLista[index].b} elvárt: ${tesztEsetLista[index].vart}, kapott ${eredmeny}`)
    }
    console.log("minden teszt lefutott")
}
lnkoTeszt()