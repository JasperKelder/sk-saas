import { db } from '$lib/db'

await db.plan.create({
	data: {
		name: 'Basic',
		handle: 'basic',
		price: 1000,
		priceId: 'price_1MhZhWKIUnxSJqh07et48mnb'
	}
})

await db.plan.create({
	data: {
		name: 'Enterprise',
		handle: 'enterprise',
		price: 10000,
		priceId: 'price_1MhZiYKIUnxSJqh0mwwvFgeR'
	}
})
