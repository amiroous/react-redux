import React, {Component} from 'react';

class Image extends Component {

    constructor(props) {
        super(props);

        this.state = {
            heightSpans: 0
        };

        this.imageRef = React.createRef();
    }

    setHeightSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const heightSpans = Math.ceil((height / 10));
        this.setState({heightSpans});
    };

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setHeightSpans);
    }

    render() {

        const {description, urls} = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.heightSpans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
};

export default Image;
