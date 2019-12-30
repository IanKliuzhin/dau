import {getHTML} from '../getHTML'

const locations = {
  "D1 - 1st level": {
    room15: "Room 1 (1938-68)",
    room16: "Bathroom (1938-68)",
    room13: "WC (1938-68)",
    room12: "Stairs (1938-68)",
    room14: "Hall (1938-68)",
    room11: "Living room (1938-68)",
    room27: "Kitchen (1938-68)",
  },
  "D2 - 1st level": {
    room26: "Kitchen (1938-68)",
    room24: "Bathroom (1938-68)",
    room25: "WC (1938-68)",
    room17: "Living room (1938-68)",
    room22: "Stairs (1938-68)",
    room23: "Hall (1938-68)",
    room21: "Guest's room (1938-68)",
  },
  "D1 - 2nd level": {
    room76: "Corridor (1966-1968)",
    room74: "Room 26 (1938-1968)",
    room72: "Room 25 (1938-1968)",
    room73: "Room 24 (1938-1968)",
    room69: "Balcony (1938-1968)",
    room75: "Stairs (1938-1968)",
    room70: "Room 23 (1938-1968)",
    room71: "Room 22 (1938-1968)",
  },
  "D2 - 2nd level": {
    room67: "Bedroom 1 — Dau's room\n(1938-1968)",
    room68: "Bedroom 2 — Nora's room\n(1938-1968)",
    room65: "Pass (1938-1968)",
    room66: "Brattery — Denis's room\n(1938-1968)",
    room02: "Balcony (1938-1968)",
  },
  "1st level": {
    room01: "Back gate",
    room18: "Main gate",
    room19: "Garages",
    room20: "Garages",
    room10: "Corridor of Cafe",
    room07: "Smoking room",
    room06: "Toilet (gents)",
    room05: "Toilet (ladies)",
    room03: "Café",
    room09: "Place for braizer",
    room08: "Kitchen",
    room35: "Big  Corridor",
    room37: "Stairs to Pigsty",
    room36: "Pigsty",
    room39: "Room for cleaning stuff 2",
    room38: "Room for cleaning staff 1",
    room40: "Big Laboratory",
    room42:
      'Personnel department (1938-52)\nSpecial department (1952-56)\nEditing office of a newspaper "Izvestiya Instituta" (1956-68)',
    room41: "Personnel department (1938-52)\nSpecial department (1952-56)\nParty nucleus (1956-68) ",
    room64: "Corridor of main entrance",
    room63: "Guard's room",
    room77: "Cashdesk",
  },
  "2nd level": {
    room59: "Theoretical department",
    room58: "Stairs to Special Office (1956-68)",
    room57: "Corridor of Special Office (1956-68)",
    room56: "Medical Office (1956-68)",
    room55: "Special Office (1956-68)",
    room54: "Atelier (1956-68)",
    room53: "Reception of hairdresser",
    room52: "Hairdresser",
    room51: "Massage place",
    room50: "Small Laboratory",
    room49: "Corridor of Small lab",
    room48: "Photolab",
    room47: "Biophysic's lab 2 (plants)",
    room46: "Biophysic's lab 1 (animals)",
    room45: "Small Corridor of Small Lab",
    room44: "Library",
    room43: "Entrance to Director's Office ",
  },
  "3rd level": {
    room61: "Director's office",
    room60: "Columns pass",
    room62: "Roof",
  },
  "Prison - 1st level": {
    room33: "Investigation Office",
    room28: "Stairs to Prison",
    room34: "Prison cell 1",
    room32: "Corridor of prison",
    room29: "Prison cell 2",
    room30: "Prison cell 3",
    room31: "Prison cell 4",
  },
  "": {
    room04: "Cafe's porch",
  },
}

export const makeMapHints = (doc) => {
  const container = doc.getElementById("mapContainer")
  getHTML('pages/institute/assets/inst_map.svg', function (response) {
    const content = response.querySelector('svg');
    if (content) {
      container.appendChild(content)
      const map = container.querySelector('svg')
      const svgParams = map.getBBox()
      Object.keys(locations).forEach((locName) => {
        for (const [roomID, roomName] of Object.entries(locations[locName])) {
          const room = map.getElementsByClassName(roomID)[0]
          const roomParams = room.getBBox()
          const hint = document.createElement('div')
          hint.classList.add('hint')
          const cut = document.createElement('div')
          cut.classList.add('cut')

          const bottomLine = document.createElement('div')
          bottomLine.classList.add('line')
          const bottomText = document.createElement('p')
          bottomText.innerHTML = roomName
          hint.appendChild(bottomLine)
          bottomLine.appendChild(bottomText)

          if (locName.length > 0) {
            const topLine = document.createElement('div')
            topLine.classList.add('line')
            const topText = document.createElement('p')
            topText.innerHTML = locName
            topLine.appendChild(topText)
            hint.appendChild(topLine)
            if (locName.length > roomName.length) {
              bottomLine.classList.add('withCut')
              bottomLine.appendChild(cut)
            } else {
              topLine.classList.add('withCut')
              topLine.appendChild(cut)
            }
          }
          hint.style.left = `${(roomParams.x + roomParams.width) / svgParams.width * 100}%`
          hint.style.top = `${(roomParams.y + roomParams.height) / svgParams.height * 100}%`
          room.onmouseover = () => hint.style.visibility = 'visible'
          room.onmouseout = () => hint.style.visibility = 'hidden'
          container.appendChild(hint)
        }
      })
    }
  });
}
