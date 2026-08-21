//#region node_modules/.nitro/vite/services/ssr/assets/mail-api-BjIfhYAx.js
var BUILTIN_RESEND = "re_FpC8UF4k_M1YadrZmVCvQT9B8dBqhHGqH";
async function sendAppMail(arg) {
	const key = (arg.data.apiKey || BUILTIN_RESEND).trim();
	const from = (arg.data.from || "TakoLogs <noreply@mail.takohelp.com>").trim();
	if (!key) return {
		ok: false,
		error: "no-mail"
	};
	const payload = {
		apiKey: key,
		from,
		to: arg.data.to,
		subject: arg.data.subject,
		html: arg.data.html
	};
	for (const url of [
		"mail-send.php",
		"./mail-send.php",
		"/mail-send.php"
	]) try {
		const res = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload)
		});
		if (res.ok) return { ok: true };
		const body = await res.text().catch(() => "");
		if (res.status !== 404) return {
			ok: false,
			error: `mail ${res.status} ${body.slice(0, 180)}`
		};
	} catch {}
	try {
		const res = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${key}`,
				"Content-Type": "application/json",
				"User-Agent": "TakoLogs/1.0"
			},
			body: JSON.stringify({
				from,
				to: payload.to,
				subject: payload.subject,
				html: payload.html
			})
		});
		if (!res.ok) {
			const body = await res.text().catch(() => "");
			return {
				ok: false,
				error: `mail ${res.status} ${body.slice(0, 180)}`
			};
		}
		return { ok: true };
	} catch {
		return {
			ok: false,
			error: "cors"
		};
	}
}
//#endregion
export { sendAppMail };
