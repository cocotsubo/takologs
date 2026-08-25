const BUILTIN_RESEND = "re_FpC8UF4k_M1YadrZmVCvQT9B8dBqhHGqH";

export async function sendAppMail(arg: {
  data: {
    to: string;
    subject: string;
    html: string;
    apiKey?: string;
    from?: string;
  };
}) {
  const key = (arg.data.apiKey || BUILTIN_RESEND).trim();
  const from = (arg.data.from || "TakoLogs <noreply@mail.takohelp.com>").trim();
  if (!key) return { ok: false as const, error: "no-mail" };
  const payload = {
    apiKey: key,
    from,
    to: arg.data.to,
    subject: arg.data.subject,
    html: arg.data.html,
  };
  const proxies = ["mail-send.php", "./mail-send.php", "/mail-send.php"];
  for (const url of proxies) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) return { ok: true as const };
      const body = await res.text().catch(() => "");
      if (res.status !== 404) {
        return { ok: false as const, error: `mail ${res.status} ${body.slice(0, 180)}` };
      }
    } catch {
      /* try next */
    }
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "User-Agent": "TakoLogs/1.0",
      },
      body: JSON.stringify({
        from,
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      return { ok: false as const, error: `mail ${res.status} ${body.slice(0, 180)}` };
    }
    return { ok: true as const };
  } catch {
    return { ok: false as const, error: "cors" };
  }
}
