document.getElementById('form').addEventListener('submit', submitted)

function submitted(e) {
  e.preventDefault()
  document.getElementById('success').style.display = 'block'
  var file = document.getElementById('file').value
  console.log(file)
  setTimeout(() => {
    document.getElementById('success').style.display = 'none'
  }, 3000)
}
