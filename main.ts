// radio.setGroup(10)



const rychlost = 238

function autickoJede(ul: number = 0, ur: number = 0, ll: number = 0, lr: number = 0) {
    ul = Math.map(ll, -100, 100, -255, 255)
    ur = Math.map(lr, -100, 100, -215, 215)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, -ul)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -ur)
}

autickoJede(-100, -100, 0, 0)
autickoJede(-100, -100)

function autickoDozadu() {
    autickoJede(-100 * rychlost, -100 * rychlost,
                -100 * rychlost, -100 * rychlost)

}
function autickoDopredu() {
    autickoJede(100 * rychlost, 100 * rychlost,
                100 * rychlost, 100 * rychlost)

}


/*
radio.onReceivedNumber(function(receivedNumber: number) {

})

radio.onReceivedValue(function(name: string, value: number) {
    
})
*/

radio.onReceivedString(function(str: string) {
    console.log(str)
    
})
