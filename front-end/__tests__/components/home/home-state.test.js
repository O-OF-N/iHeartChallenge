import {updateState,updateStateDimensions} from '../../../src/components/home/home-state';

describe('updates search and artists',()=>{

    describe('when updateArtists is called with search results',()=>{
        const startState = {artists:[1,2,3,4],search:false,width:100 };
        it('updates search and artists',()=>{
            const newState = updateState(startState,[4,5,6],true);
            expect(newState).toEqual({artists:[4,5,6],search:true,width:100 });
        });
    });

    describe('when the reset button is pressed',()=>{
        const startState = {artists:[4,5,6],search:true,width:100 };
        it('updates search to original and artists',()=>{
            const newState = updateState(startState,[1,2,3],false);
            expect(newState).toEqual({artists:[1,2,3],search:false,width:100 });
        });
    });


    describe('when no results are returned from search',()=>{
        const startState = {artists:[4,5,6],search:true,width:100 };
        it('updates the artists array as empty and search to true',()=>{
            const newState = updateState(startState,[],true);
            expect(newState).toEqual({artists:[],search:true,width:100 });
        });
    });

    describe('returns the original state when the artists is falsy',()=>{
        const startState = {artists:[4,5,6],search:true,width:100 };
        it('updates the artists array as empty and search to true',()=>{
            const newState = updateState(startState,null,true);
            expect(newState).toEqual(startState);
        });
    });

    describe('returns the original state when search is not boolean',()=>{
        const startState = {artists:[4,5,6],search:true,width:100 };
        it('updates the artists array as empty and search to true',()=>{
            const newState = updateState(startState,[1],'true');
            expect(newState).toEqual(startState);
        });
    });
});

describe('updates dimensions',()=>{
    const startState = {artists:[4,5,6],search:true,width:100 };
    describe('when the screen is adjusted',()=>{
        it('sets the new dimension',()=>{
            const newState = updateStateDimensions(startState,{innerWidth:200});
            expect(newState).toEqual({artists:[4,5,6],search:true,width:200 });
        })
    });

     describe('when window is not an object',()=>{
        it('returns the original state',()=>{
            const newState = updateStateDimensions(startState,200);
            expect(newState).toEqual(startState);
        })
    });
});