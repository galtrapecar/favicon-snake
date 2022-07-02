(()=>{"use strict";const A=[{file:"snake_01.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABT0lEQVQ4jaVSsUoDQRCdDVcEIbaCYCBYpbCwSGETOwt7sRFE4n9c8h9GLSySys7CLiksYiFokUpSGARbFbEQRt7A28xeDhsfHHMzO+/NzO4EEVH5B7Iy6ijvlyru9jpLsaQDErcbTXmYTZNEH/NCUQBkJNWqmXx8/9ghCT4OO54+RRETKJJrxzsiw3tLIEkOWxbz4hCpFGcCOYRgBCbjnzHLqS6uLv6x3ba0FmJunGJeFGD7JIy756Kq1i5mNdFhZjGctZtbURTcMMr7iuDK0Z68nd2UVvEvAayd7svX1a0VyHhRvmUKIgk+CfFCHadCIqqDRBH4JHgyhZM9wCycDdX+AsX4jAAWCSL6fnmnOpioYTDReb1u1uKqZvEhl7xkE8uwedGT55N86YjVk0WyMVaDPH7OowW8z5cgEgHMNnt9kcb6RrTXB53E91soIvILeU7s9NCKtgAAAAAASUVORK5CYII="},{file:"snake_02.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVUlEQVQ4jaVSsUpDQRDcC68QIbaCYCBYpbCwiKBFXmdhLzaCSPyPZ/7DqAGLpLKzsEsKA7EQtEglKQyCrRGxEFZmw5x3voeNA2Hfze3M7ubWiYjKP5AUSftZu9AxbTVzXNQBhRvVmtxPxlFiyIVG3gBiJJUXEpl9ftklBSGPOBg/epNSkRhCfDdq656HiPfg2G3uPygfbknqtkVVZdYZzsn9uqRu0zjpDM2I8F9styH1H7NgnN953oDtUzA4OZtX6t1Z22baS4zDHcaiKbSun7UV5OLBjryeXhdWCV8CWD7elY/LGytgI9CRLdMQSThTwFcINSUKUR0imuBMQSimcbQHmIWzodpfoBnG5C5gkWCibxe3qt2RGrojnVYqFo1XtYgfcqmLNrEIa+cteTrKclfRJhI2xpKTh/epj0B45ksQkQFmm7w8S3Vl1cervWZ0DrdQROQbHgfwgof4HsAAAAAASUVORK5CYII="},{file:"snake_03.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVQ4jaWSMUsDQRCF3x5biKCtIBgIViks/ANnZ2FvZ6Pxf1zyP4xaWCSVnYVdUljEQtAilaQwCLYqYiGMvIW37F4OGweOuZ2d783M3TgAhn+Yb0LH1aBRca/fXYplHQjcbXfwMJ9liWksFYoChJm0tuLx8f0TLgWkcfrJ7CmKFE0wQb6XnZ0YJ6R7xtRtUZ9JVQmoE76nnkIyXwfL3gmcczAzYHQfRNLYpHeeFfRqX8pMEKyK5chHmGOpM7JuXA2MwdWjfbyd3WTd1E2FNk4P8HV1GwqEEaSojyRBJvEsQH8hZQqBrE5IIjwLSGEJZ3vAWTQbq/1lEuOY2gUuEkXs/fLObDi1YMOpLVqt4EPcLHg+zBWXbWKTbV/08XxcLV1lmygLY6w7PH4uoqelZ/0JWSbA2eavL2hvbkV/fdjNzukWAsAv/Nb51UnLf00AAAAASUVORK5CYII="},{file:"snake_04.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQklEQVQ4jaVSsUoDQRB9d1whgraCYCBYpbCwsI2dhb3Y2Gj8j0v+w6iFRazsLOySwiIWghapJIVBsFURi8DKG3jLbHKx8cExO7Pz3szcTgYg4B8oqqj9slupuNtpzcWSDkTcrjfwOB4liT7mhaIAyUxaWSrw+TO1SxF8nHYweo4ieRWZRJ6bja0YJ0n3jKnbfHYmVSVBnfDsLYWEYpbo4cdZlJf1y25gS1JmlWb7BLh+iBU5Cg53MGif29n/IxNgcPloD+9ntwu70c8k1k738X11ZwVsBCmqZQkyib4IegXPyUVkdZIkQl8ET5Zwsgd8Es3Gan9BYhxTu8BFokj4uLwPoTcMht4wTGo1sxYPwSw/5oqXbGIVNi86eDku566STRRsjNUMT1+TaAnv6yWERICzjd9eUV/fiPbmoJX4fgsB4Bciqu5qDphvCQAAAABJRU5ErkJggg=="},{file:"snake_05.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABM0lEQVQ4jaVSsWoCQRCdO64QIbZCQEGsLCzyA6azSG9nE/Q/Dv9D0cLCLp2FnSksbISksBILJWCrIVgEJryFt8zqaZMHdzM7M+/tzN1EIqLyDyRZ1Hk6yFR87nWuYkEHJD5VarLaroNCG7NCXgBkFD3kEjmdf12SBBuHfV9/epE4iwwi/Eat7uMgMY8Yu40vZ+KtILAT+NZCiEguiRZ2nFt10TwdKFqiMm9B+7d8+41iEovdFz+fbdf6yKEGtRzDvanIlnFLvt2Un/HME+iTSI7v4NCfOhJFcCbBkikc7AF+CWfDbfdAMczPXcAiQUSPo4XqZKkOk6Xuy2VnXVzVWTyoJS/YxCxUhz3ZvKZXqWATCTdGIZKP7723gD3zLxGBAGbbfu2k8ljy9q3VCc52C0VE/gDP5OrnENbx5AAAAABJRU5ErkJggg=="},{file:"snake_07.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVUlEQVQ4jaVSsUpDQRDcC68QIbaCYCBYpbCwiKBFXmdhLzaCSPyPZ/7DqAGLpLKzsEsKA7EQtEglKQyCrRGxEFZmw5x3voeNA2Hfze3M7ubWiYjKP5AUSftZu9AxbTVzXNQBhRvVmtxPxlFiyIVG3gBiJJUXEpl9ftklBSGPOBg/epNSkRhCfDdq656HiPfg2G3uPygfbknqtkVVZdYZzsn9uqRu0zjpDM2I8F9styH1H7NgnN953oDtUzA4OZtX6t1Z22baS4zDHcaiKbSun7UV5OLBjryeXhdWCV8CWD7elY/LGytgI9CRLdMQSThTwFcINSUKUR0imuBMQSimcbQHmIWzodpfoBnG5C5gkWCibxe3qt2RGrojnVYqFo1XtYgfcqmLNrEIa+cteTrKclfRJhI2xpKTh/epj0B45ksQkQFmm7w8S3Vl1cervWZ0DrdQROQbHgfwgof4HsAAAAAASUVORK5CYII="},{file:"snake_08.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABT0lEQVQ4jaVSsUoDQRCdDVcEIbaCYCBYpbCwSGETOwt7sRFE4n9c8h9GLSySys7CLiksYiFokUpSGARbFbEQRt7A28xeDhsfHHMzO+/NzO4EEVH5B7Iy6ijvlyru9jpLsaQDErcbTXmYTZNEH/NCUQBkJNWqmXx8/9ghCT4OO54+RRETKJJrxzsiw3tLIEkOWxbz4hCpFGcCOYRgBCbjnzHLqS6uLv6x3ba0FmJunGJeFGD7JIy756Kq1i5mNdFhZjGctZtbURTcMMr7iuDK0Z68nd2UVvEvAayd7svX1a0VyHhRvmUKIgk+CfFCHadCIqqDRBH4JHgyhZM9wCycDdX+AsX4jAAWCSL6fnmnOpioYTDReb1u1uKqZvEhl7xkE8uwedGT55N86YjVk0WyMVaDPH7OowW8z5cgEgHMNnt9kcb6RrTXB53E91soIvILeU7s9NCKtgAAAAAASUVORK5CYII="}],g=[{file:"snake_press_start.png",URI:"data:image/png;base64,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"},{file:"snake_press_start_face.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABE0lEQVQ4jaVTQQ5BQQztiCUOIPzkL20kljYcRcIRHABnsCacwBlYsJSwsJQgDvDZj7x+nXTGR8RLJk0zfa/ttGOIyNIfyGnqcjDh8wtcBSA24hpTt8cD2/aoR9amBa6GU/azgAgLLAcTm8zW7sCXO7mXeDncArLc5hvOINkBqUj7YYvmmYGMMSRiKDckayCJtOM9YliJruZdJd4YdSV6Mu9aQoKvAsC4P6K4XKViYl+EvBayyBq7+4VuJeO1l/vIUNlDIUE+JFyiyPMXT3u8nlkItl6ouDacgBArp5Mj8wOqbIAmOwGQQeS/oIIRuNunAiBSYj2yNwWQW8Mu70Gx03QWSyViGrJM3hizfmLWRrpNJKIHO42xNWhILFAAAAAASUVORK5CYII="}],a=[{file:"snake_09.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABT0lEQVQ4jaVSsUoDQRCdDVcEIbaCYCBYpbCwSGETOwt7sRFE4n9c8h9GLSySys7CLiksYiFokUpSGARbFbEQRt7A28xeDhsfHHMzO+/NzO4EEVH5B7Iy6ijvlyru9jpLsaQDErcbTXmYTZNEH/NCUQBkJNWqmXx8/9ghCT4OO54+RRETKJJrxzsiw3tLIEkOWxbz4hCpFGcCOYRgBCbjnzHLqS6uLv6x3ba0FmJunGJeFGD7JIy756Kq1i5mNdFhZjGctZtbURTcMMr7iuDK0Z68nd2UVvEvAayd7svX1a0VyHhRvmUKIgk+CfFCHadCIqqDRBH4JHgyhZM9wCycDdX+AsX4jAAWCSL6fnmnOpioYTDReb1u1uKqZvEhl7xkE8uwedGT55N86YjVk0WyMVaDPH7OowW8z5cgEgHMNnt9kcb6RrTXB53E91soIvILeU7s9NCKtgAAAAAASUVORK5CYII="},{file:"snake_10.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVQ4ja1SLU8DQRScJScakmpcE4KqQCAqMMUh+AMYEkLgfxz9H7QgEO0fQOBagSgCgagiGAwWEoIgeWReMtt3vQumvOSyu7Mz8z5uEwDDGrGxjhj/YVA0gdNy2Eg+GJzXsMoMJNzb7uLpdVEhRiwaZQOKSWq3Cnx+//ilBBHnOls8ZxM3WBW3T/eByaMTJMJxz7FoTpPaEClOKblAZO6FOae1HF3eqdw+ekuz0M4qLxuofAlmlyOYmZfLXt10UjjGu353N5tSm6bl0Ahunhzi/equMUv8E4ytiyN83d57gkKDiiXLkCSeJcgDDRofIkFmp0gmPEsQxTKuvAP2ot6Y7a+QmX4jgw+JJvZx82A2npvHeG5vnY6vjpv5yo9c6SovsSl2rgd4OStrV54dwC98idB4/RMIqQAAAABJRU5ErkJggg=="},{file:"snake_11.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAElEQVQ4jd2SrQ7CMBSFb8nEQoJGIxEIxARmOAQvgCFBjPcYew+GwvACCNywCAQCiUaTEARJybnJKd1YMDhq1p7e892fzoiIlR9W4xez/AcgqBOLNK8NHmbJh1Z6BRr7na4cL+dSoK/5IAeAGUGtMJDb46mXNPg6vvvzyUEUUDW3ZgORzUEDaJJJpJoPB+RjiDAbY9TAYOypaUz4Hp3bsdxYojfMa6ca5wAsn4b9YiXWWi0XvSp0E6iGu7jbc1B4TZHmFmJzOpLrclubxX8JrPZ8LPf1ThNoCySyZAIRhDMNbqCeR4cIEdlhIgRnGnwzwaX/AL2wN2T7tgjTZ8wSeQFEt54F9Ce+WQAAAABJRU5ErkJggg=="},{file:"snake_12.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVQ4jWNkYGD4z0ABYKJEM8OoAdQxgAWb4MH6uVgV2zcmY4ihpAOYRkNFTYbz96+jKEQWQzYIbgBIM0gRLwcLw+cff8CSMA3I4iD60PXLcEPABqBr5o23ZGBYeRqsAKaJIdwULIZsOMgQjEAEaWZkZARrgCkGsWFiYDUciKCDs2DOtWOAKIIphBuCpg5uAMz5MA2HGuYx/P//H+xckF/Bhq5kAYuB5Ow0deGGgvQyHqyf+x8kyBXjxvByzjastiDHBAiIp3gxfFuyC2wB2AswE2FOhhkIUgTiwzTAAxSmh4GBAQBEc3p45cqnjAAAAABJRU5ErkJggg=="},{file:"snake_13.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAs0lEQVQ4jWNkYGD4z0ABYKJEM8OoAcPFABZsggfr52JVbN+YjCGGkhJhGg0VNRnO37+OohBZDNkguAEgzSBFvBwsDJ9//AFLwjQgi4PoQ9cvww0BG4CumTfekoFh5WmwApgmhnBTsBiy4SBDMAIRpJmRkRGsAaYYxIaJgdWADEQPRJhz7RggimAK4YagqYMbAHM+TMOhhnkM////BzsX5FewoStZwGIgOTtNXbihB+vnMgAAlVhWOTKwFpwAAAAASUVORK5CYII="},{file:"snake_14.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhklEQVQ4jWNkYGD4z0ABYKJEM8OoAaMGUMsAFmyCB+vnYlVs35iMIYaSF2AaDRU1Gc7fv46iEFkM2SC4ASDNIEW8HCwMn3/8AUvCNCCLg+hD1y/DDQEbgK6ZN96SgWHlabACmCaGcFOwGLLhIEMwAhGkmZGREawBphjEhomB1YAMBAEGBgYACRc3an9mQ60AAAAASUVORK5CYII="},{file:"snake_15.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWUlEQVQ4jWNkYGD4z0ABYKJEM8OoAaMGDB8DWLAJHqyfi1WxfWMyhhhKboRpNFTUZDh//zqKQmQxZIPgBoA0gxTxcrAwfP7xBywJ04AsDqIPXb8MMYSBgQEAHdQeHSkU0ZwAAAAASUVORK5CYII="},{file:"snake_16.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVQ4jWNkYGD4z0ABYKJEM8OoAaMGjBowWAxgYGAAAE1AAR/AywFlAAAAAElFTkSuQmCC"}],e=[{file:"snake_die_01.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTElEQVQ4jWNkYGD4z0ABYMGm9WD9XKwm2jcmY4ihuACm0VBRk+H8/esoCpHFkA2CGwDSDFLEy8HC8PnHH7AkTAOyOIg+dP0y3BCwAdg0g9ggANOETMMMBxnChO4n8RQvMM0V4wbXxBhhBrENSsMMZ0AORJhzvy3ZBdb8cs42uI3/V5wCa/604BhG2DAerJ/7H+R8mMkwzSCX7KjuhQcaSDNfghXYMGRvgA2w09SF+xfZNegA2SIQAAUmC7JGmJNBBoJcAvIOiA9yDYyNHJAgwIQrxEHegPHRNSMHIjwaQbbCbMMHYIbBohEEQAkJZMh/ThaB//9XnPoPBitO/X8iJwemPy04BhYC0SA1ILUwfSgpERtQnt/IcDexHkMKZjtKQgJ7g4+R4dKXJ3AaBJD5sJhACUQYAPnt/rPHDIpSsnB6fWgyCh85ABkYGBgAMurtgoW8bh0AAAAASUVORK5CYII="},{file:"snake_die_02.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKElEQVQ4jWNkYGD4z0ABYKJEMwM1DGDBJniwfi5WxfaNyRhiKGEA02ioqMlw/v51FIXIYsgGwQ0AaQYp4uVgYfj84w9YEqYBWRxEH7p+GW4I2ABsmkFsEIBpQqZhhoMMwQhE8RQvMM0V4wbXxBhhBrENSsMMRwlEmHO/LdkF1vxyzja4jf9XnAJr/rTgGEbYMB6sn/sf5HyYyTDNIJfsqO6FBxpIM1+CFdgwZG+ADbDT1IX7F9k16ADZIhAABSYLskaYk0EGglwC8g6ID3INjI0ckAywlIgtxEHegPHRNSMHIjwaQbbCbMMHYIbBohEEQAkJZMh/ThaB//9XnPoPBitO/X8iJwemPy04BhYC0SA1ILUwfSgpERtQnt/IcDexHkMKbDsDAwMA7frRBlslN2AAAAAASUVORK5CYII="},{file:"snake_die_03.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA80lEQVQ4jWNkYGD4z0ABYKJEM8PwMIAFm+DB+rlYFds3JmOIocQCTKOhoibD+fvXURQiiyEbBDcApBmkiJeDheHzjz9gSZgGZHEQfej6ZbghYAOwaQaxQQCmCZmGGQ4yBCMQxVO8wDRXjBtcE2OEGcQ2KA0zHCUQYc79tmQXWPPLOdvgNv5fcQqs+dOCYxhhw3iwfu5/kPNhJsM0g1yyo7oXHmggzXwJVmDDkL0BNsBOUxfuX2TXoANki0AAFJhgFnLAgdggA0EuAXkHxAe5BsZGDkgQAAcithAHeQPGR9eMHIjwaATZCrMNH4AZBo7GxmQGAN+jownRImg0AAAAAElFTkSuQmCC"},{file:"snake_die_04.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2klEQVQ4jWNkYGD4z0ABYKJEM8OoAdQxgAWb4MH6uVgV2zcmY4ihpAOYRkNFTYbz96+jKEQWQzYIbgBIM0gRLwcLw+cff8CSMA3I4iD60PXLcEPABmDTDGKDAEwTMg0zHGQIRiCKp3iBaa4YN7gmxggziG1QGmY4SiDCnPttyS6w5pdztsFt/L/iFFjzpwXHMMKG8WD93P8g58NMhmkGuWRHdS880ECa+RKswIYhewNsgJ2mLty/yK5BB8gWgQAoMMEs5IADsUEGglwC8g6ID3INjI0ckAwMDAwAUzl/fM2NoYIAAAAASUVORK5CYII="},{file:"snake_die_05.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAs0lEQVQ4jWNkYGD4z0ABYKJEM8OoAcPFABZsggfr52JVbN+YjCGGkhJhGg0VNRnO37+OohBZDNkguAEgzSBFvBwsDJ9//AFLwjQgi4PoQ9cvww0BG4BNM4gNAjBNyDTMcJAhGIEonuIFprli3OCaGCPMILZBaZjhKIEIc+63JbvAml/O2Qa38f+KU2DNnxYcwwgbxoP1c/+DnA8zGaYZ5JId1b3wQANp5kuwAhsG98b96wwAY61ePVnbaHwAAAAASUVORK5CYII="},{file:"snake_die_06.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfklEQVQ4jWNkYGD4z0ABYKJEM8OoAaMGUMsAFmyCB+vnYlVs35iMIYaSF2AaDRU1Gc7fv46iEFkM2SC4ASDNIEW8HCwMn3/8AUvCNCCLg+hD1y/DDQEbgE0ziA0CME3INMxwkCEYgSie4gWmuWLc4JoYI8wgtkFpmOEMDAwMAKNmNsPbXjegAAAAAElFTkSuQmCC"},{file:"snake_die_07.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWUlEQVQ4jWNkYGD4z0ABYKJEM8OoAaMGDB8DWLAJHqyfi1WxfWMyhhhKboRpNFTUZDh//zqKQmQxZIPgBoA0gxTxcrAwfP7xBywJ04AsDqIPXb8MMYSBgQEAHdQeHSkU0ZwAAAAASUVORK5CYII="},{file:"snake_die_08.png",URI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVQ4jWNkYGD4z0ABYKJEM8OoAaMGjBowWAxgYGAAAE1AAR/AywFlAAAAAElFTkSuQmCC"}],i=A=>new Promise((g=>setTimeout(g,A))),n=document.createElement("canvas");n.height=16,n.width=16;const B=n.getContext("2d");document.getElementById("canvas-wrapper").appendChild(n);let t,E=!0,C=!1,I=!1,w=8,s=8,Q=16,R=12,h=12,o=0,f=0,Y=[],U=5;async function c(){console.log("Game initialized."),C=!1,async function(){for(;E;)await M(),await i(1e3),await G(),await i(1e3),await G(),await i(1e3),await D(),await O()}(),document.addEventListener("keyup",l)}function k(A){let g=document.querySelector("#favicon"),a=g.cloneNode(!0);a.setAttribute("href",A),g.parentNode.replaceChild(a,g)}function l(A){32==A.keyCode&&(document.removeEventListener("keyup",l),E=!1,document.addEventListener("keydown",b),t=setInterval(S,130))}function S(){w+=o,s+=f,w<0&&(w=Q-1),w>Q-1&&(w=0),s<0&&(s=Q-1),s>Q-1&&(s=0),B.fillStyle="black",B.fillRect(0,0,n.width,n.height),B.fillStyle="#FFA8CA";for(let A=0;A<Y.length;A++)if(B.fillRect(Y[A].x,Y[A].y,1,1),Y[A].x==w&&Y[A].y==s&&(U=5,console.log(I),I&&!C))return C=!0,clearInterval(t),void async function(){B.fillStyle="black",B.fillRect(0,0,n.width,n.height);const A=e[0].URI;await N(A),k(A),await async function(){for(let A=0;A<e.length;A++){const g=e[A].URI;await N(g),k(g),console.log("Snake die step"+(A+1)),0==A&&await i(3e3),0!=A&&await i(100)}}(),await i(3e3),E=!0,C=!1,I=!1,w=8,s=8,Q=16,R=12,h=12,o=0,f=0,Y=[],U=5,c()}();for(Y.push({x:w,y:s});Y.length>U;)Y.shift();R==w&&h==s&&(U++,R=Math.floor(Math.random()*Q),h=Math.floor(Math.random()*Q)),B.fillStyle="red",B.fillRect(R,h,1,1),k(n.toDataURL())}function b(A){switch(A.keyCode){case 65:I=!0,o=-1,f=0;break;case 87:I=!0,o=0,f=-1;break;case 68:I=!0,o=1,f=0;break;case 83:I=!0,o=0,f=1}}async function G(){if(!E)throw 400;for(let g=0;g<A.length;g++){const a=A[g].URI;if(!E)throw 400;await N(a),k(a),await i(200)}}async function D(){if(!E)throw 400;for(let A=0;A<a.length;A++){const g=a[A].URI;if(!E)throw 400;await N(g),k(g),await i(100)}}async function M(){if(!E)throw 400;for(let A=a.length-1;A>=0;A--){const g=a[A].URI;if(!E)throw 400;await N(g),k(g),await i(100)}}async function O(){if(!E)return;let A=g[0].URI,a=new Image;a.src=A;for(let A=0;A<360;A++){if(!E)return;k(m(a,A)),await i(30)}}function m(A,g){if(E)return B.drawImage(A,-1*g,0),n.toDataURL()}function N(A){return new Promise((g=>{console.log("Canvas draw call");let a=new Image;a.onload=function(){B.drawImage(a,0,0),g()},a.src=A}))}c()})();