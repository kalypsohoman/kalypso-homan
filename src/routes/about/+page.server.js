// import { fail } from '@sveltejs/kit';


// /** @type {import('./$types').Actions} */
// export const actions = {
// 	login: async ({ cookies, request }) => {
// 		const data = await request.formData();
// 		const name = data.get('name');
// 		const email = data.get('email');
// 		const message = data.get('message');

// 		if (!name) {
// 			return fail(400, { name, missing: true });
// 		}

// 		if (!email) {
// 			return fail(400, { email, missing: true });
// 		}
        
// 		if (!message) {
// 			return fail(400, { email, missing: true });
// 		}

//         if (email)

// 		const user = await db.getUser(email);

// 		if (!user || user.password !== hash(password)) {
// 			return fail(400, { email, incorrect: true });
// 		}

// 		cookies.set('sessionid', await db.createSession(user), { path: '/' });

// 		return { success: true };
// 	},
// 	register: async (event) => {
// 		// TODO register the user
// 	}
// };