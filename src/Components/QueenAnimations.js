import React from 'react';
import {PalmSmall1,BushSmall,PalmSmall3,KnightSmall,PawnSmall,PawanUpRightSmall,RunningQueen,Tree,RookSmall,RookUprightSmall} from '../Images/';

function QueenAnimations() {
    return (
        <div className="Wrapper">
            <div className="sky"></div>
            <div className="earth">
                <div id="red-queen_and_alice">
                    <img id="red-queen_and_alice_sprite" src={RunningQueen} alt="RunningQueen"/>
                </div>
            </div>

            <div className="scenery" id="foreground1">
                <img id="palm3" src={PalmSmall3} alt="Palm"/>
            </div>

            <div className="scenery" id="foreground2">
                <img id="bush" src={BushSmall} alt="Bush"/>
                <img id="w_rook_upright" src={RookUprightSmall} alt="RookUpright"/>
            </div>

            <div className="scenery" id="background1">
                <img id="r_pawn_upright" src={PawanUpRightSmall} alt=""/>
                <img id="w_rook" src={RookSmall} alt=""/>
                <img id="palm1" src={PalmSmall1} alt=""/>
            </div>

            <div className="scenery" id="background2">
                <img id="r_pawn" src={PawnSmall} alt="Pawn"/>
                <img id="r_knight" src={KnightSmall} alt="Knight"/>
                <img id="palm2" src={Tree} alt="Tree"/>
            </div>
        </div>
    )
    }


export default QueenAnimations;
