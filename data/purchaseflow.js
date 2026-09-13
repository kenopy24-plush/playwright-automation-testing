import { user } from './user';

export const purchaseFlowData = {
    user,
    loginUrl: 'https://practicesoftwaretesting.com/auth/login',
    overviewTitle: 'Overview - Practice Software Testing - Toolshop - v5.0',
    billing: {
        country: 'MY',
        standardHouseNumber: '67',
        buyNowPayLaterHouseNumber: '11'
    },
    products: {
        standard: user.product_buy,
        giftCard: '[data-test="product-01KTDR95WSC9WJ1RVFTRCKAM5T"]'
    },
    payments: {
        cashOnDelivery: {
            method: 'cash-on-delivery'
        },
        bankTransfer: {
            method: 'bank-transfer',
            bankName: 'aaaaaa',
            accountName: '12333234aaaaaaaa',
            accountNumber: '1232333'
        },
        creditCard: {
            method: 'credit-card',
            cardNumber: '1111-1111-1111-1111',
            expirationDate: '11/2099',
            cvv: '111',
            cardHolderName: 'aaaaaaaaaaaaaa'
        },
        buyNowPayLater: {
            method: 'buy-now-pay-later',
            installments: '3'
        },
        giftCard: {
            method: 'gift-card',
            cardNumber: 'adad2313131',
            validationCode: 'adad231313122222'
        }
    }
};
