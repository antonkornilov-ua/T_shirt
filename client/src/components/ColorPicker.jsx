import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
    const snap = useSnapshot(state);
    return (
        <div className='absolute left-full ml-3'>
            <SketchPicker
                color={snap.color}
                disableAlpha
                onChange={(color) => (state.color = color.hex)}
                presetColors={[
                    '#3498db',
                    '#9b59b6',
                    '#2ecc71',
                    '#e67e22',
                    '#c0392b',
                    '#1abc9c',
                    '#e91e63',
                    '#27ae60',
                    '#f39c12',
                    '#8e44ad',
                    '#16a085',
                    '#cddc39',
                    '#34495e',
                    '#ff6f61',
                    '#009688',
                ]}
            />
        </div>
    );
};

export default ColorPicker;
