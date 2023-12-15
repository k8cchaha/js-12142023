const component = {
  data: [
    'This is first',
    'This is second',
    'This is third'
  ],
  removeData(index) {
    this.data.splice(index, 1)
    this.render()
  },
  render(){
    const list = document.querySelector('.component ul')
    let content = ''

    this.data.forEach((item, i)=>{
      content = `${content}<li>${item}<button type="button" class="btn">刪除</button></li>`
    })
    list.innerHTML = content
    const btns = document.querySelectorAll('.component .btn')
    console.log(btns)
    btns.forEach((item, i)=>{
      console.log(item)
      item.addEventListener('click', (e)=>{
        console.log(i)
        this.removeData(i)
      })
    })
  }
}

component.render()