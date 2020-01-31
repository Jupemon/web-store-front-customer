import React, { Component } from 'react';
import {Card, Col, Row, Container} from 'react-bootstrap';
class Popular extends Component {
    state = { 
        items : [],
        itemsLoaded : false
     }

    componentDidMount() {
        const width = window.innerWidth;
        if (width < 992 && width > 766) {
            this.getItems(3)
        }
        else if (width > 992) {
            this.getItems(4)
        }
        else if (width < 766) {
            this.getItems(1)
        }
    }
    getItems = (amount) => {
        console.log("items gotten")
        fetch(`https://young-bayou-22235.herokuapp.com/mostpopular/${amount}`).then( resp => resp.json())
        .then(data => {
            console.log(data)
            this.setItems(data)
        })
    }
    setItems(items) {
        console.log(items)
        this.setState({
            items : items
        })
        console.log("set items")
    }

    render() { 
            return ( <div>
                <Container>
                <h1>Most Popular</h1>
                    <Row>
                    {this.state.items.map(item => {
                        return (
                            <Col>
                        <Card style={{marginBottom:"20px", width: '12rem'}} key={"item.productid"}>
                        <div className={`outer`}> 
                                {!item.selected ? <div style={{display:"none"}} className="circle"><p>Added</p></div> : <div style={{display:"initial"}} className="circle"><p>Added</p></div>}
                                <div style={{right:"0px"}} className="overlay" onClick={(e) => {this.props.toggleModal("info", "test")}}>
                                <i style={{paddingTop:"50px", color:"white"}} className="fas fa-info-circle fa-4x"><p style={{fontSize:"15px"}}>Info</p></i>
                                </div>
                                <div className="overlay" onClick={(e) => {this.props.addToCart(item, e)}}>
                                <i style={{paddingTop:"50px", color:"white"}} className="fas fa-cart-plus fa-4x"><p style={{fontSize:"15px"}}>add to cart</p></i>
                                </div>
                                <Card.Img variant="top" src={`https://young-bayou-22235.herokuapp.com/image/${item.productid}`}/>
                                </div>
                                <div>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.price}€ {"/100g"}</Card.Text>
                        <h1>{item.popularity + "."}</h1>
                        </div>
                        </Card>
                    </Col>
                        )
                    })}
                    </Row>
                    </Container>
                </div> );
        
    }
}
 
export default Popular;