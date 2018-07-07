package com.vizurd.portfolio.pradip

import java.util.*

fun main(args: Array<String>) {
    getKareokePosition()
}

fun getKareokePosition() {
    val scanner = Scanner(System.`in`)
    val beatCount = scanner.nextInt()

    var currPos: Int
    when (beatCount) {
        0 -> currPos = 0
        1 -> currPos = 1
        2 -> currPos = -1
        else -> {
            var secLastStep = 1
            var lastStep = -2
            currPos = -1

            (3..beatCount).forEach {
                val currStep = lastStep - secLastStep
                currPos += currStep
                secLastStep = lastStep
                lastStep = currStep
            }
        }
    }
    println(currPos)
}
