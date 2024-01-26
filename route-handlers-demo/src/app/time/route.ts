//default: auto
export const dynamic = "force-dynamic"; //opts out of caching

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString()
    })
}