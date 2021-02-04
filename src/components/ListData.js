import { render } from '@testing-library/react';
import React from 'react';

class ListData extends React.Component {
    constructor(props) {
        super(props);

        this.state ={ dataset: [] }
    }
    

    componentDidMount() {
        fetch('http://localhost:3001/')
        .then(function(response){ return response.json(); })
        .then(dataset => {
            this.setState({dataset});
        })
        .catch(err => {console.log(err);} )
        
    }

    render() {
        return(
            <div>
            <table style= {{'alignItems': 'center'}}>
                <tr>
                    <th>Date</th>
                    <th>Code</th>
                </tr>
                {this.state.dataset.map(data => <tr >
                        <td style={{'padding': '10px'}}>{data.date}</td>
                        <td>{data.code}</td>
                    </tr>)}
                </table>
            </div>
        )

    }
};



export default ListData;