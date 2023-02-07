import './paragraph.css'

const Paragraph = (props) => {
    console.log(props.color)
    return <div className="paragraph">
        <p style={{color: props.color, textTransform: props.textTransform}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis neque reicienedis accusamus aliquam temporibus dicta est labore vel? Quisquam saepe officia nesciunt enim quae! Fugit nulla nihil sit recusandae?</p>
    </div>
}

Paragraph.defaultProps = {
    color: '#000000',
    textTransform: 'none'
}

export default Paragraph;