// radio.setGroup(10)


radio.onReceivedString(function (str: string) {

const jakMocJsemOtocilTroubu = ("str".charCodeAt(0))

function autickoJede(ul: number = 0, ur: number = 0, ll: number = 0, lr: number = 0) {
    ul = Math.map(ll, -100, 100, -255, 255)
    ur = Math.map(lr, -100, 100, -215, 215)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, -ul)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -ur)
    }

autickoJede(-100, -100, 0, 0)
autickoJede(-100, -100)

function autickoDozadu() {
    autickoJede(-100 * jakMocJsemOtocilTroubu, -100 * jakMocJsemOtocilTroubu,
                -100 * jakMocJsemOtocilTroubu, -100 * jakMocJsemOtocilTroubu)

    }
function autickoDopredu() {
    autickoJede(100 * jakMocJsemOtocilTroubu, 100 * jakMocJsemOtocilTroubu,
                100 * jakMocJsemOtocilTroubu, 100 * jakMocJsemOtocilTroubu)

    }

    if (jakMocJsemOtocilTroubu > 0) {   
        return autickoDopredu
    } else {
        return autickoDozadu
    }

})

  
    
// ("str".charCodeAt(0))
