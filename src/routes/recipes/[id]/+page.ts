export const prerender = false;

export async function load({ params, fetch }) {
	const foodId = +params.id;

	return {
		foodId
	};
}
