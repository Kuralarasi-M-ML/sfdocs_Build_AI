# Monitor Go Profiler

## Overview

SnappyFlow profiler collects 

- Profiles (supported: `cpu`, `heap`, `block`, `mutex`, `goroutine`, `threadcreate`)
- Runtime metrics 

and sends them to SnappyFlow for further visualization and analysis.

`cpu` and `heap` profiles are enabled by default and other profiles can be enabled as required.

- godoc: <https://pkg.go.dev/github.com/snappyflow/sf-go-profiler/profiler>

- sample code: <https://github.com/snappyflow/sf-go-profiler/tree/main/example/main.go>

## Getting started

- **Pre-requisites**

  - Install and configure snappyflow agent on vm or as a sidecar in the container, as it is required to send data to snappyflow-apm
  - Run the below command to download or update sf-go-profiler package in your current project.

    ```bash
    go get -u -v github.com/snappyflow/sf-go-profiler/profiler
    ```

- **Example**

```go
import "github.com/snappyflow/sf-go-profiler/profiler"

main(){
    profile := profiler.NewProfilerConfig("server")
    profile.Start()
    defer profile.Stop()
    // rest of the application code
}
```

- profiling can conditionally enabled when required using golang flags

```go
import (
    "github.com/snappyflow/sf-go-profiler/profiler"
    "flag"
)

main(){
    enableprofile := flag.Bool("profile",false,"enable profiler")
    if *enableprofile {
        profile := profiler.NewProfilerConfig("server")
        // below line disables collection of go runtime metrics
        // profile.DisableRuntimeMetrics()
        // below line disables profiling
        // profile.DisableProfiles()
        profile.Start()
        defer profile.Stop()
    }
    // rest of the application code
}
```

- runtime metrics can be disable by calling `DisableRuntimeMetrics()` similarly profiling can be disabled by calling `DisableProfiles()` on profile config object.

```go
    profile := profiler.NewProfilerConfig("server")
    // below line disables collection of go runtime metrics
    profile.DisableRuntimeMetrics()
    // below line disables profiling
    profile.DisableProfiles()
    profile.Start()
    defer profile.Stop()
```

- enable other supported profiles as required

```go
    // enable block profile and set given block profile rate
    profile.EnableBlockProfile(100)
    // enable mutex profile and set given mutex profile fraction
    profile.EnableMutexProfile(1000)
    // enable goroutine profile
    profile.EnableGoRoutineProfile()
    // enable threadcreate profile
    profile.EnableThreadCreateProfile()
```

- since only heap and cpu profiles are enabled by default, all supported profiles can be enabled by call to function `EnableAllProfiles()`, this sets block profile rate to `DefaultBlockProfileRate` and mutex profile fraction to `DefaultMutexProfileFraction`

```go
    // enable all supported profiles
    profile.EnableAllProfiles()
```

## Sample runtime metrics collected

- reference: <https://pkg.go.dev/runtime#MemStats>

```json
{
  "alloc_mb": 8.4275,
  "frees": 28575,
  "gc_cpu_fraction": 0.0001,
  "go_version": "go1.16.4",
  "interval": 60,
  "last_gc": 1631099627396,
  "live_objects": 27146,
  "mallocs": 27361,
  "max_pause_gc_ms": 0.1033,
  "min_pause_gc_ms": 0.0366,
  "num_cpu": 2,
  "num_gc": 2,
  "num_goroutines": 23,
  "pid": 23201,
  "sys_mb": 71.5791,
  "time": 1631099686505,
  "total_alloc_mb": 8.8994,
  "total_pause_gc_ms": 0.14,
}
```

