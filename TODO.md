use this trick
```typescript
constructor() {
    Object.assign(this, {
      single,
      multi,
      countries,
      chartGroups,
      colorSets,
      graph: generateGraph(50),
      bubble
    });
```
