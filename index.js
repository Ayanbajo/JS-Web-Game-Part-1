// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '400px'
// pineTree.style.bottom = '150px'
// document.body.append(pineTree)

function newImage(src, left, bottom){
    let image = document.createElement('img')
    image.src = src
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}


newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/rock.png', 200, 325)
newImage('assets/boulder.png', 700, 425)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/green-character.gif', 100, 100)


// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })

// function newItem(src, left, bottom){
//     let newItem = document.createElement('img')
// newItem.src = src
// newItem.position = 'fixed'
// newItem.left = left + 'px'
// newItem.bottom = bottom + 'px'
// document.body.append(newItem)

// newItem.addEventListener('click', function(){
//     newItem.remove()
// })
// }


function newItem(src, left, bottom){
    let image = newImage(src, left, bottom)

    image.addEventListener('dblclick', () => {
        image.remove()
    })
}


newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)
