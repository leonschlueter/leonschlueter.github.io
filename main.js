var story;
function getStory() {
    return {
        currentScene: "start",
        start: {
            title: "Der Anfang",
            story: `Guten Morgen! Du wachst in deinem Bett in Burg auf. Es ist dunkel und du hast Kopfschmerzen und weisst nicht, wie du hierhergekommen bist, aber da der Film weitergehen muss, denkst du dir: "Was soll ich machen?"`,
            choices: [
                {
                    choice: "Erst mal ein League spielen!",
                    destination: 'lol'
                },
                {
                    choice: "Ich möchte in den Wald.",
                    destination: 'wald'
                },
                {
                    choice: "Ich muss umbedingt in die Stadt!",
                    destination: 'stadt'
                }
            ]
        },
        lol: {
            title: 'League of Legends is the way',
            story: `Du kleiner Suchthaufen, du brauchst umbedingt den Prestige PROJECT Louis Vitton Alistar Skin, damit du weiter daran erinnert wirst, dass du kein Leben hast. Kein Ding, das ist deine Story... Doch jetzt stellt sich die ultimative Frage: "Willst du während dem Spiel Musik hören?"`,
            choices: [
                {
                    choice: "Ja.",
                    destination: 'music'
                },
                {
                    choice: "Nö.",
                    destination: 'nomusic'
                }
            ]
        },
        nomusic: {
            title: 'Keine Musik für dich...',
            story: `Na, dann mal los! SELECT YOUR CHAMPION brennt sich in deine Augen ein und du fragst dich, welche Rolle du überhaupt gequeued hast:`,
            choices: [
                {
                    choice: "Top.",
                    destination: 'top'
                },
                {
                    choice: "Jungle.",
                    destination: 'jgl'
                },
                {
                    choice: "Mid.",
                    destination: 'mid'
                },
                {
                    choice: "Bottom.",
                    destination: 'bot'
                }, {
                    choice: "Support.",
                    destination: 'sup'
                },
            ]
        },
        top: {
            title: 'Top',
            story: `Oioioi, Justus du kleiner Sion-Main, da hast du wohl gedacht, du kannst das Spiel einfach so solobolo gewinnen. Eine dir bekannte Stimme flüstert in dein Ohr(n): "Top Gap...". Plötzlich hast du stechende Kopfschmerzen und du fällst in Ornnmacht..."`,
            choices: [
                {
                    choice: "Weiter.",
                    destination: 'start'
                }
            ]
        },
        jgl: {
            title: 'Jungle',
            story: `"SEEEEJUAAANIII" schreist du und lockst die gute alte Sau ein. Das Spiel beginnt, leider hast du vergessen Smite mitzunehmen und du wirst im echten Leben von Mordekaiser geultet. Viel Spass im Shadowrealm...`,
            choices: [
                {
                    choice: "Weiter.",
                    destination: 'start'
                }
            ]
        },
        mid: {
            title: 'Mitte',
            story: `Die Tanzfläche bebt und er spielt in der Mitte - Elektrotitte. Du pickst deinen Lieblingschamp: Siuuuu-on, doch dein Team ist leider Plasik III und massreporten dich wegen Trolling...`,
            choices: [
                {
                    choice: "Weiter.",
                    destination: 'start'
                }
            ]
        },
        bot: {
            title: 'Botlane',
            story: `Was ein Zufall, du spielst ja mit Leon, da kannst du ja Bot spielen. Du pickst Ezreal und denkst dir: "Das Spiel wird ez, for real". Auf einmal hörst du deine Mutter rufen: "Wir gehen 'etz zu Real". Enttäuscht schaltest du den PC aus und läufst die Treppe hinunter. Dir rutscht das Herz in die Hose, als du merkst, dass du aussrutscht.`,
            choices: [
                {
                    choice: "Weiter.",
                    destination: 'start'
                }
            ]
        },
        sup: {
            title: 'Support',
            story: `Bro, hast du ernsthaft Support gepickt... Du merkst wie dir trümmlig wird, da du Sona eingelockt hast...`,
            choices: [
                {
                    choice: "Weiter.",
                    destination: 'start'
                }
            ]
        },
        music: {
            title: 'Die Musikauswahl',
            story: `Spotify wird geöffnet und du fragst dich was für Musik du hören sollst:`,
            choices: [
                {
                    choice: "Rock and Roll",
                    destination: 'rnr'
                },
                {
                    choice: "Rap.",
                    destination: 'rap'
                }
            ]
        },
        rnr: {
            title: 'R&R',
            story: `You know what: Fuck Rock and Roll! Du entscheidest dich doch für den deutschen Rapkünstler, Märchenerzähler Klabautermann Kalli 69: `,
            choices: [
                {
                    choice: "Weiter.",
                    destination: 'rap'
                },

            ]
        },
        rap: {
            title: 'Rap',
            story: `Smart Choice :D Du machst die Musik vom Ehrenmann Alligatoah an und fühlst die Musik. Auf einmal hörst du ein Flüstern: "Wer reitet so spät durch Nacht und Wind", du flüsterst zurück "Alli-Alligatoah" und alles um dich herum wird weiss: Du schwebst in der Luft und du siehst Alligatoah als Gott und du hörst Engelschöre.`,
            choices: [
                {
                    choice: "Weiter",
                    destination: 'end'
                }
            ]
        },
        end: {
            title: 'Das Ende',
            story: `Mit leisen Schritten hörst du eine dunkle Gestalt mit Kapuze auf dich zu kommen. Die Person zieht die Kapuze ab und du siehst das Gesicht von Leon. Leon überreicht dir eine frohe Botschaft "Alligatoah is the way. Erwarte die Tickets am 10. Mai. Doch zu erst musst du fabelhafte Kreaturen sammeln. Alles was du dazu benötigst wirst du bald erhalten. Bis bald..."`,
            choices: [
                {
                    choice: "Weiter",
                    destination: 'end'
                }
            ]
        },
        wald: {
            title: 'Der Wald',
            story: `Du entscheidest dich für den wunderbaren Wald, welche weite Wanderwege besitzt. So aber jetzt genug Aliterationen, du fragst dich gerade, was es eigentlich für Wetter ist...`,
            choices: [
                {
                    choice: "Sonne.",
                    destination: 'sun'
                },
                {
                    choice: "Schnee.",
                    destination: 'snow'
                },
                {
                    choice: "Regen",
                    destination: 'rain'
                }
            ]
        },
        sun: {
            title: 'Sonne',
            story: `Du Sonnyboy (nicht zu verwechseln mit Moneyboy), die Sonne lacht doch du regst dich auf dass du kein Schlittschuhlaufen kannst...`,
            choices: [
                {
                    choice: "Lauf weiter.",
                    destination: 'sgang'
                }
            ]
        },
        snow: {
            title: 'Schnee',
            story: `Leise rieselt der Schnee... Denkst du dir, doch dadurch dass der fiktive Klimawandel hier schon sehr fortgeschritten ist, gibt es gar keinen Schnee, sondern Manuel Neuer. Verwirrt läufst du los...`,
            choices: [
                {
                    choice: "Weiter",
                    destination: 'sgang'
                }
            ]
        },
        rain: {
            title: 'Regen',
            story: `Es regnet. Doch da Alligatoah ein Lied mit dem Namen "Es regnet kaum" hat, kann es wohl kaum regnen. Verärgert läufst du los...`,
            choices: [
                {
                    choice: "Weiter",
                    destination: 'sgang'
                }
            ]
        },
        sgang: {
            title: 'Der Spaziergang',
            story: `Du steppst durch den Wald und lässt liegen, was dir aus der Hose plumpst: eine Packung Bifi, Batterien und Plutonium. Auf einmal erblickst du ein Dorf, welches von südamerikanischen Ureinwohnern besiedelt wurde und an einem anderen Pfad siehst du eine Brotkrümelspur welche tiefer in den Wald führt. Welch weirder Wald, denkst du dir und überlegst dir panisch deine Möglichkeiten:`,
            choices: [
                {
                    choice: "Gehe zum Dorf",
                    destination: 'dorf'
                }, {
                    choice: "Folge der Spur",
                    destination: 'spur'
                }, {
                    choice: "Gehe zurück zur Stadt",
                    destination: 'stadt'
                }
            ]
        },
        dorf: {
            title: 'Dorf',
            story: `Du entscheidest dich für das Dorf, welches dir auf irgendeine Art Angst macht. Entschlossen betrittst du das Dorf, in dem sich der Häupling vorstellt und mit freundlicher Stimme begrüsst. Da es in diesem Dorf Tradition ist, fragt dieser dich, was du essen möchtest:`,
            choices: [
                {
                    choice: "Eine Pizza mit Schrauben",
                    destination: 'pizza'
                },
                {
                    choice: "Gerösteter Panda",
                    destination: 'panda'
                }
            ]
        },
        pizza: {
            title: 'Eine Pizza mit Schrauben bitte',
            story: `Der Häuptling schaut dich fragend an, als du deine Antwort mitteilst. "Eine Pizza mit Schrauben? Danach hat ein antiker Besucher schon mal gefragt". Der Blick wird misstrauischer und er befiehlt dir, mitzukommen.`,
            choices: [
                {
                    choice: "Wegrennen",
                    destination: 'run'
                },
                {
                    choice: "Mitkommen",
                    destination: 'allido'
                }
            ]
        },
        run: {
            title: 'Regen',
            story: `Du entscheidest dich wegzurennen. Der Häuptling merkt, dass etwas nicht stimmt und schreit seinen Soldaten etwas zu. Das Ganze macht dir unheimlich Angst du du willst dich umdrehen, als du plötzlich einen stechenden Schmerz in der Brust spürst. Du greifst zu deinem Rücken und merkst wie etwas auf deiner Hand krabbelt. Du schaust es an und du erblickst einen knallgelben Giftfrosch. Dir wird schwarz vor Augen...`,
            choices: [
                {
                    choice: "Weiter",
                    destination: 'start'
                }
            ]
        },
        allido: {
            title: 'Ein mystischer Bewohner',
            story: `Ihr beide betretet die prunkvolle Hütte und auf einer Liege aus Bananenblättern, sitzt ein Mann, welcher Zigarettenrauch pustet. Er beginnt zu erzählen: "Keiner möchte mehr hier wohnen, alle wandern aus, ob nun Santa Claus oder Sean da Paul..." Du blickst ihn verwirrt an und es geht dir ein Licht auf: Das ist der hochgelobte Künstler Alligatoah und er lebt hier in Ruhe und Frieden. Mit leiser Stimme fragst du, ob noch Suppe da sei und Kalli69 zeigt auf einen Topf. Du blickst hinein und dein Körper wird in eine neue Dimension teleportiert. Du merkst wie deine Seele sich löst und du eine Vision der Zukunft hast: Du siehst eine Menschenmasse, einer der Menschen hat eine Apple Watch Series 4, Nike Edition mit Sportarmband an und du erblickst das Datum "4. März 2023", rechts daneben erblickst du eine äusserst gutaussehende Person, die dir bekannt vorkommt... Es ist Leon...`,
            choices: [
                {
                    choice: "Weiter",
                    destination: 'start'
                }
            ]
        },
        spur: {
            title: 'Die Spur',
            story: `Du beschliesst dich, der Krümelspur zu folgen. Du fühlst dich ein bisschen wie in einem Märchen. Aber wenn das Leben schon wie ein Märchen ist, braucht Rap nicht wieder einen Märchenerzähler. Du folgst der Spur bis du an ein Haus aus Lebkuchen kommst und dort sitzt Leon in einem Hexenkostüm. "So so, du hast also das Märchenende gewählt. Na dann kann ich dir ja sagen was dein Geschenk ist. Und zwar..." Dir wird schwindlig und fällst in Ohnmacht...`,
            choices: [
                {
                    choice: "Weiter",
                    destination: 'start'
                }
            ]
        },
        stadt: {
            title: 'Die Stadt',
            story: `Du entscheidest dich für die City in der man dich mittlerweile kennt. Lecker Bitterballen... Nö. Das ist nicht Holland. Du bist doch ein echter Gangster also WAS WILLST DU TUUUUUN?`,
            choices: [
                {
                    choice: "Auf zur Party!",
                    destination: 'party'
                },
                {
                    choice: "Date",
                    destination: 'date'
                }
            ]
        },
        party: {
            title: 'Die Party',
            story: `Du gehst natürlich auf deine Geburtstagsparty. Was denn sonst?! Die Party ist grandios und du bist schon ganz gespannt was Leon dir schenken wird... Doch als du bei der Party ankommst, hält dich der Türsteher auf. Du protestierst und siehst nur noch eine Faust auf dich zu fliegen... `,
            choices: [
                {
                    choice: "Weiter",
                    destination: 'start'
                }
            ]
        },
        date: {
            title: 'Das Date',
            story: `Das Date kannst du dir einfach nicht entgehen lassen. Du triffst dich mit einer sehr hübschen Dame. Doch du merkst, dass sie schön ist, aber dafür kann sie nichts. Nicht mal lesen und schreiben... Trotdem läuft das Date super und am Schluss geht sie auf die Knie und fragt dich: "Willst du?"`,
            choices: [
                {
                    choice: "Ja!",
                    destination: 'start'
                },
                {
                    choice: "Nein!",
                    destination: 'drugs'
                }
            ]
        },
        drugs: {
            title: 'Die Nacht',
            story: `Du merkst, wie dir schwummrig wird. Da hat die Olle dir doch glatt einen Liebestrank und andere Drogen in den Cocktail geschüttet. Du hast die grössten Liebesgefühle und ihr verbringt eine grandiose Nacht. Ihr entscheidet euch noch in dieser Nacht gemeinsam zu heiraten. Und nein du kannst keine Entscheidungen mehr treffen, also nicht high raten. Ihr lauft zum Pastor, wo du merkst, dass es der Rapkünstler Alligatoah ist und mit mitleidigem Blick dich anschaut: "Ich weiss dass du sie nicht highraten willst, jedoch wollte Gott es so. Als Entschädigung darfst du aber mit Leon auf mein Konzert im Jahr 2023 kommen. Tut mir leid". Du weisst nicht ob du lachen oder weinen sollst... `,
            choices: [
                {
                    choice: "Weiter",
                    destination: 'start'
                }
            ]
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#start-button')
    var content = document.querySelector('#content')
    button.addEventListener('click', function () {
        story = getStory()
        renderScene()
    })
})

function renderScene() {
    var text = "Next"

    if (story[story.currentScene].buttonText) {
        text = story[story.currentScene].buttonText
    }
    content.innerHTML = `
  <h1>${story[story.currentScene].title}</h1>
  <p>${story[story.currentScene].story}</p>
  ${getInputs()}
  <button id = "submit-button">${text}</button>
  `
    var button = document.querySelector("#submit-button");
    button.addEventListener('click', function () {
        getInputValue()
    })
}

function getInputValue() {
    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            story.currentScene = inputs[i].getAttribute('data-destination')
            renderScene();
            return;
        }
    }
    story.currentScene = story[story.currentScene].defaultDestination
    renderScene()
}

function getInputs() {
    var input = ""
    if (!story[story.currentScene].choices) {
        return ""
    }
    for (var i = 0; i < story[story.currentScene].choices.length; i++) {
        input += `
    <div>
      <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
      <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
    </div>`
    }
    return input;
}
