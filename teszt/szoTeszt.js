import { szamokOsszege } from "../fuggvenyek.js";


function szamokOsszegeTeszt(){
    const tesztEsetLista=[
    {
        n:123,
        vart:6,
        szoveg:"pozitív szám"
    },
    {
        n:-123,
        vart:0,
        szoveg:"negatív szám"
    },
    {
        n:111154,
        vart:13,
        szoveg:"nagy pozitív szám"
    },
    {
        n:0,
        vart:0,
        szoveg:"nulla"
    }




    ]
    for (let index = 0; index < tesztEsetLista.length; index++) {
        let eredmeny = szamokOsszege(tesztEsetLista[index].n);
        console.assert(
        eredmeny===(tesztEsetLista[index].vart),`n= ${tesztEsetLista[index].n} elvárt:${tesztEsetLista[index].vart}, kapott ${eredmeny}`)
    }
    console.log("minden teszt lefutott")

}
szamokOsszegeTeszt()

