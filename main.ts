// radio.setGroup(10)








radio.onReceivedString(function (str: string) {

const jakMocJsemOtocilTroubu = ("str".charCodeAt(0))

function autickoJede(lw: number = 0, rw: number = 0) {
    const ul = Math.map(lw, -100, 100, -255, 255) // přizpůsobit našem kolům
    const ur = Math.map(rw, -100, 100, -215, 215)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, -ul)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -ur)
    }


/*
autickoJede(-100, -100)
autickoJede(0, 0)
*/


function autickoDozadu() {
    autickoJede(-1 * jakMocJsemOtocilTroubu, -1 * jakMocJsemOtocilTroubu)

    }
function autickoDopredu() {
    autickoJede(1 * jakMocJsemOtocilTroubu, 1 * jakMocJsemOtocilTroubu)

    }

    if (jakMocJsemOtocilTroubu > 127) {
        return autickoDopredu
    } else {
        return autickoDozadu
    }

})

  
    
// ("str".charCodeAt(0))
