const click = document.getElementById('click')
const champName = document.querySelectorAll('.name')
const img = document.querySelectorAll('img')

fetch('./data/data.json')
  .then(function (res) {
    return res.json()
  })
  .then(function (data) {
    click.addEventListener('click', function (e) {
      e.preventDefault()

      let num1 = Math.floor(Math.random() * data.champions.length)
      let num2 = Math.floor(Math.random() * data.champions.length)
      let num3 = Math.floor(Math.random() * data.champions.length)

      if (num1 === num2 || num1 === num3) {
        num1 = Math.floor(Math.random() * data.champions.length)
      } else if (num2 === num3) {
        num2 = Math.floor(Math.random() * data.champions.length)
      }

      //add all the informations :
      //name
      champName[0].textContent = data.champions[num1].name
      champName[1].textContent = data.champions[num2].name
      champName[2].textContent = data.champions[num3].name
      //image
      img[0].setAttribute('src', `${data.champions[num1].image}`)
      img[1].setAttribute('src', `${data.champions[num2].image}`)
      img[2].setAttribute('src', `${data.champions[num3].image}`)
      //Lane
      const lanesChampionOne = data.champions[num1].lanes
      const lanesChampionTwo = data.champions[num2].lanes
      const lanesChampionThree = data.champions[num3].lanes
      const whatLanes = document.getElementsByClassName('lanes')

      //Vérifie les lanes sur lesquelssont jouées les champions et renvois leur équivalent sur le html.
      for (i = 0; i < Object.keys(lanesChampionOne).length; i++) {
        if (i === 0) {
          let first = `${lanesChampionOne.first}`
          whatLanes[0].textContent = first
        } else if (i === 1) {
          let second = `${lanesChampionOne.first} / ${lanesChampionOne.second}`
          whatLanes[0].textContent = second
        } else if (i === 3) {
          let third = `${lanesChampionOne.first} / ${lanesChampionOne.second} / ${lanesChampionOne.third}`
          whatLanes[0].textContent = third
        }
      }

      for (i = 0; i < Object.keys(lanesChampionTwo).length; i++) {
        if (i === 0) {
          let first = `${lanesChampionTwo.first}`
          whatLanes[1].textContent = first
        } else if (i === 1) {
          let second = `${lanesChampionTwo.first} / ${lanesChampionTwo.second}`
          whatLanes[1].textContent = second
        } else if (i === 3) {
          let third = `${lanesChampionTwo.first} / ${lanesChampionTwo.second} / ${lanesChampionTwo.third}`
          whatLanes[1].textContent = third
        }
      }

      for (i = 0; i < Object.keys(lanesChampionThree).length; i++) {
        if (i === 0) {
          let first = `${lanesChampionThree.first}`
          whatLanes[2].textContent = first
        } else if (i === 1) {
          let second = `${lanesChampionThree.first} / ${lanesChampionThree.second}`
          whatLanes[2].textContent = second
        } else if (i === 3) {
          let third = `${lanesChampionThree.first} / ${lanesChampionThree.second} / ${lanesChampionThree.third}`
          whatLanes[2].textContent = third
        }
      }
    })
  })
  .catch(function (err) {
    throw err
  })
