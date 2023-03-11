import React from 'react';

const HOC = (OriginalComponent, data) => {
    class NewComponent extends React.Component {
        render() {
            return (
                <OriginalComponent data={data} />
            )
        }
    }
    return NewComponent;
}
export default HOC;