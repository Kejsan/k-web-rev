import { type NextRequest, NextResponse } from "next/server"
import { emailService } from "@/lib/email-services"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firstName, lastName } = body

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address" }, { status: 400 })
    }

    // Subscribe to email service
    const result = await emailService.subscribe(email, firstName, lastName)

    // Log successful subscription (you might want to add to your analytics)
    if (result.success) {
      console.log(`New subscription: ${email}`)
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Subscription API error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
