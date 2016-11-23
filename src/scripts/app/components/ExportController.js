import React from 'react';
import { compose } from 'ramda';

import { saveAsWAVFile, saveAsMIDIFile } from '../utils/save';
import { buildMidiDataURIFromInstruments } from '../utils/midi';

const ExportModal = ({ actions }) => (
    <div className="u-flex-row u-flex-wrap">
        <div className="u-mr05">
            <button
                className="button-primary button-primary--small button-primary--positive"
                onClick={ () => { actions.saveMIDI(); actions.disableModal(); } }
            >
                Save as MIDI
            </button>
        </div>
        <div className="">
            <button
                className="button-primary button-primary--small button-primary--positive"
                onClick={ () => { actions.saveWAV(); actions.disableModal(); } }
            >
                Save as WAV
            </button>
        </div>
    </div>
);

const buildAndSaveMidi = compose(
    saveAsMIDIFile,
    buildMidiDataURIFromInstruments,
);

const launchExportModal = (instruments, bpm, buffer, actions) => {
    const content = (
        <ExportModal actions={{
            disableModal: actions.disableModal,
            saveMIDI: () => buildAndSaveMidi(instruments, bpm),
            saveWAV: () => saveAsWAVFile(buffer),
        }} />
    );
    actions.enableModal({ content, isCloseable: true, title: 'Export' });
};

const ExportController = props => {
    const { instruments, bpm, buffer, actions } = props;
    return (
        <button
            className="button-primary button-primary--alpha-dark button-primary--tiny"
            onClick={() => launchExportModal(instruments, bpm, buffer, actions)}
            disabled={!buffer}
        >
            Save
        </button>
    );
};

export default ExportController;
