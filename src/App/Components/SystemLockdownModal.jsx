import React from 'react';

class SystemLockdownModal extends React.Component {
    render() {
        return (
            <div>
                <h3>Intrusion detected!</h3>
                <p>Message system: [2018-04-14T16:49:33+0200Z] FAILURE: VV Shield has been breached...</p>
            </div>
        );
    }
}

export default SystemLockdownModal;
