import { NextRequest, NextResponse } from "next/server";
import countries from "../lib/countries.json";

export async function middleware(req: NextRequest) {
    const { nextUrl: url, geo } = req;
    const country = geo.country || "US";
    const city = geo.city || "San Francisco";
    const region = geo.region || "CA";

    const countryInfo: any = countries.find((x: any) => x.cca2 === country);

    const currencyCode: string = Object.keys(countryInfo.currencies)[0];
    const currency = countryInfo.currencies[currencyCode];
    const languages = Object.values(countryInfo.languages).join(", ");

    url.searchParams.set("country", country);
    url.searchParams.set("city", city);
    url.searchParams.set("region", region);
    url.searchParams.set("currencyCode", currencyCode);
    url.searchParams.set("currencySymbol", currency.symbol);
    url.searchParams.set("name", currency.name);
    url.searchParams.set("languages", languages);

    return NextResponse.rewrite(url);
}
