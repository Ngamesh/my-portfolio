function readBoolean(value) {
  if (typeof value === "boolean") return value;
  if (value && typeof value.value === "boolean") return value.value;
  return null;
}

export async function validateEmailDeliverability(email, apiKey) {
  if (!apiKey) {
    throw new Error("Email verification is not configured");
  }

  const response = await fetch("https://emailreputation.abstractapi.com/v1/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) {
    throw new Error("Email verification service is unavailable");
  }

  const data = await response.json();
  const deliverability = String(
    data.deliverability ?? data.email_deliverability?.status ?? "UNKNOWN"
  ).toUpperCase();
  const isFormatValid = readBoolean(
    data.is_valid_format ?? data.email_deliverability?.is_format_valid
  );
  const isMxValid = readBoolean(
    data.is_mx_found ?? data.email_deliverability?.is_mx_valid
  );
  const isSmtpValid = readBoolean(
    data.is_smtp_valid ?? data.email_deliverability?.is_smtp_valid
  );
  const isDisposable = readBoolean(
    data.is_disposable_email ?? data.email_quality?.is_disposable
  );
  const isCatchAll = readBoolean(
    data.is_catchall_email ?? data.email_quality?.is_catchall
  );

  let reason = null;
  if (isFormatValid === false) reason = "invalid_format";
  else if (isDisposable === true) reason = "disposable";
  else if (isCatchAll === true) reason = "catch_all";
  else if (isMxValid === false) reason = "missing_mx";
  else if (isSmtpValid === false) reason = "invalid_mailbox";
  else if (deliverability !== "DELIVERABLE") reason = "not_deliverable";

  return {
    valid: reason === null,
    reason,
    suggestion: data.autocorrect || "",
  };
}
