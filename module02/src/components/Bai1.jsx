import { Component } from 'react'

export default class Bai1 extends Component {
  render() {
  let arr = ["HTML", "Javascript","Python","C#"]
    return (
        <>
            <h2>Danh sách khóa học</h2>
            <ul>{arr.map((item, index) => (<li key={index}>{item}</li>))}</ul>
        </>
    )
  }
}
