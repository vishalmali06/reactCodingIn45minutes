import React, { useState } from 'react';

function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isOn}
                    onChange={() => setIsOn(!isOn)}
                />
                {isOn ? 'On' : 'Off'}
            </label>
        </div>
    );
}

export default ToggleSwitch;
