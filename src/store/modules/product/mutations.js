export default {
    addBox(state, payload) {
        state.box = payload;
    },
    addCard(state, payload) {
        state.card = payload;
    },
    addGift(state, payload) {
        if (payload.startLength) {
            state.gifts = [...state.gifts, { ...payload, length: payload.startLength }];
        } else {
            let length = 1;
            let updateGift = state.gifts.map(gift => {
                if (gift._id === payload._id) {
                    length++;
                    gift.length = gift.length + 1;
                }
                return gift;
            });
            if (length === 1) {
                state.gifts = [...state.gifts, { ...payload, length: 1 }];
            } else {
                state.gifts = updateGift;
            }
        }
    },
    delGift(state, payload) {
        state.gifts = state.gifts.filter(gift => gift._id !== payload._id);
    },
    addGiftBox(state, payload) {
        if (payload.startLength) {
            state.giftBoxes = [...state.giftBoxes, { ...payload, length: payload.startLength }];
        } else {
            let length = 1;
            let updateGiftBox = state.giftBoxes.map(giftBox => {
                if (giftBox._id === payload._id) {
                    length++;
                    giftBox.length = giftBox.length + 1;
                }
                return giftBox;
            });
            if (length === 1) {
                state.giftBoxes = [...state.giftBoxes, { ...payload, length: 1 }];
            } else {
                state.giftBoxes = updateGiftBox;
            }
        }
    },
    delGiftBox(state, payload) {
        state.giftBoxes = state.giftBoxes.filter(giftBox => giftBox._id !== payload._id);
    },
    addMessage(state, payload) {
        state.message = payload;
    },
    changePrice(state, payload) {
        state.price = state.price + payload;
    },

    reset(state) {
        state.box = {};
        state.card = {};
        state.gifts = [];
        state.giftBoxes = [];
        state.message = '';
        state.price = 0;
    },
}
